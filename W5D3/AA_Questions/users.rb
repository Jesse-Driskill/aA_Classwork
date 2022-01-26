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
        data.map {|datum| User.new(datum)}
    end
end

a = User.new('fname'=>'Joe', 'lname'=>'Biden')


p User.find_by_id(2)

class Question
    attr_accessor :id, :title, :body, :author_id
    def self.find_by_id(num)
        data = UsersDBConnection.instance.execute(<<-SQL)
        SELECT * FROM questions WHERE id = #{num}
        SQL
        data.map {|datum| Question.new(datum)}
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end


    def create
        raise "#{self} already in database" if self.id
        UsersDBConnection.instance.execute(<<-SQL, title, body, author_id)
        INSERT INTO
            questions (title, body, author_id)
        VALUES
            (?, ?, ?)
        SQL
        self.id = UsersDBConnection.instance.last_insert_row_id
    end


end
q1 = Question.new('title' =>"What?", 'body' => "Do the american people want? please tell me.", 'author_id' => 2)
q1.create


class Question_Follows 

    def self.all 

    end


    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end


end

