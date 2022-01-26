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

class Users 
    attr_accessor :id, :fname, :lname
    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def self.all
        data = UsersDBConnection.instance.execute('SELECT * FROM users')
    end
end
a = Users.new('id'=> 1, 'fname'=>'john', 'lname'=>'smith')
p Users.all
