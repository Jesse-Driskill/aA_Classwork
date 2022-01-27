require_relative 'users'
require_relative 'question'
require_relative 'question_follows'



class Reply
    attr_accessor :id, :subject_question, :parent_reply, :question_writer, :user_reply

    def initialize(options)
        @id = options['id']
        @subject_question = options['subject_question']
        @parent_reply = options['parent_reply']
        @question_writer = options['question_writer']
        @user_reply = options['user_reply']
    end

    def self.find_by_user_id(num)
        UsersDBConnection.instance.execute(<<-SQL)
            SELECT *
            FROM replies
            WHERE question_writer = #{num}
        SQL
    end

    def author
        UsersDBConnection.instance.execute(<<-SQL, self.question_writer)
        SELECT fname, lname 
        FROM users
        WHERE id = ?
        SQL
    end

    def self.find_by_question_id(num)
        UsersDBConnection.instance.execute(<<-SQL)
            SELECT *
            FROM replies
            WHERE subject_question = #{num}
        SQL
    end

    def parent_reply
        UsersDBConnection.instance.execute(<<-SQL, self.parent_reply)
        SELECT user_reply
        FROM replies
        WHERE id = ?
        SQL
    end
    def child_replies
        UsersDBConnection.instance.execute(<<-SQL, self.id)
        SELECT user_reply
        FROM replies
        WHERE parent_id = ?
        SQL
    end
end