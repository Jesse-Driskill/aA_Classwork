require "sqlite3"
require "singleton"

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

    def self.find_by_id(num)
        data = UsersDBConnection.instance.execute(<<-SQL)
        SELECT * FROM users WHERE id = #{num}
        SQL
        data.map {|datum| User.new(datum)}
    end

    def update

    end
end

a = User.new('fname'=>'Joe', 'lname'=>'Biden')


p User.find_by_id(2)

class Question
    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end
end