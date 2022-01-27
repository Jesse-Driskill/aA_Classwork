require_relative 'users'
require_relative 'question'
require_relative 'reply'




class Question_Follows 

    def self.all 

    end
    QuestionFollow::followers_for_question_id(question_id)

    def self.followers_for_question_id(question_id)
        
        #use question id to make a sql query, should return all the users that are following the question
        #shoudl return user instances. 
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end


end