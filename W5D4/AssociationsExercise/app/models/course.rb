class Course < ApplicationRecord
    validates :name, :prereq_id, :instructor_id, presence: true

    belongs_to :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :enrollments,
        primary_key: :id,
        foreign_key: :course_id,
        class_name: :Enrollment

    has_many :enrolled_students,
        through: :enrollments,
        source: :user

    has_many :pre_reqs,
        primary_key: :prereq_id,
        foreign_key: :id,
        class_name: :Course

    has_one :instructor,
        primary_key: :instructor_id,
        foreign_key: :id,
        class_name: :User

end
