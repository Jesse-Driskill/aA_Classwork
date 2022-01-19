class Employee
    attr_reader :salary

    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        bonus = @salary * multiplier
    end
end


class Manager < Employee
    attr_accessor :employees

    def initialize(name, title, salary, boss)
        super(name, title, salary, boss)
        @employees = []
    end

    def add_employee(name, title, salary, boss)
        
    end

    def bonus(multiplier)
        sum = 0
        i = 0
        while i < employees.length
            sum += employees[i].salary
            i += 1
        end

        bonus = sum * multiplier
        return bonus
    end
end


j1 = Employee.new("j1", "worker", 10, "john")
j2 = Employee.new("j2", "worker", 10, "john")
j3 = Employee.new("j3", "worker", 10, "john")

boss = Manager.new("john", "baws", 100, "jeff")
boss.employees = [j1, j2, j3]
p boss.salary
p boss.bonus(1)