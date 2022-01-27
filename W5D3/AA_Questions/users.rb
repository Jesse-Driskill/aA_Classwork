

require "sqlite3"
require "singleton"
require_relative 'question'
require_relative 'question_follows'
require_relative 'reply'

class UsersDBConnection < SQLite3::Database
    include Singleton
    def initialize
        super('users.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end

class User 
    attr_accessor :id, :fname, :lname
    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def self.all
        data = UsersDBConnection.instance.execute('SELECT * FROM users')
        data.map {|datum| User.new(datum)}
    end

    def create
        raise "#{self} already in database" if self.id
        UsersDBConnection.instance.execute(<<-SQL, fname, lname)
        INSERT INTO
            users(fname, lname)
        VALUES
            (?, ?)
        SQL
        self.id = UsersDBConnection.instance.last_insert_row_id
    end

    def self.find_by_name(string, string2)
        data = UsersDBConnection.instance.execute(<<-SQL)
        SELECT * FROM users WHERE fname = #{string} AND lname = #{string2}
        SQL
        data.map {|datum| User.new(datum)}
    end


    def self.find_by_id(num)
        data = UsersDBConnection.instance.execute(<<-SQL)
        SELECT * FROM users WHERE id = #{num}
        SQL
        users = data.map {|datum| User.new(datum)}
        users[0]
    end

    def authored_question?(question_id)
        data = UsersDBConnection.instance.execute(<<-SQL, self.id)
        SELECT * FROM questions WHERE id = #{question_id} AND author_id = ?
        SQL
        data.length > 0
    end

    def authored_replies?(reply_id)
        data = UsersDBConnection.instance.execute(<<-SQL, self.id)
        SELECT *
        FROM replies
        WHERE id = #{reply_id} AND question_writer = ?
        SQL
        return data.length > 0
    end

end


