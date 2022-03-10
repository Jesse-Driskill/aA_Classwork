# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

Todo.create(id: 1, title: "Rob the bank", body: "they deserve it", done: false )
Todo.create(id: 2, title: "2Rob the bank2", body: "2they deserve it2", done: false )
Todo.create(id: 3, title: "3Rob the bank3", body: "3they deserve it3", done: false )

