require_relative 'users'
require_relative 'question_follows'
require_relative 'reply'


class Question
    attr_accessor :id, :title, :body, :author_id
    def self.find_by_id(num)
        data = UsersDBConnection.instance.execute(<<-SQL)
        SELECT * FROM questions WHERE id = #{num}
        SQL
        data.map {|datum| Question.new(datum)}
    end

    def self.find_by_author_id(num)
        UsersDBConnection.instance.execute(<<-SQL)
        SELECT * FROM questions WHERE author_id = #{num}
        SQL
    end

    def self.all
        data = UsersDBConnection.instance.execute('SELECT * FROM questions')
        data.map {|datum| Question.new(datum)}
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end
    def author
        data = UsersDBConnection.instance.execute(<<-SQL self.author_id)
        SELECT fname,lname FROM users WHERE id = ?
        SQL
        data
    end
    def reply 
        data = UsersDBConnection.instance.execute(<<-SQL, self.question_id) 
        SELECT *
        FROM replies
        WHERE subject_question = ?
        SQL
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