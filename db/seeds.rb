# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

benches = Bench.create([
  {description: "Cool bench", lat: 37.774851, lng: -122.439583},
  {description: "Crappy bench", lat: 37.781567, lng: -122.425834},
  {description: "Bench in Golden Gate park", lat: 37.768813, lng: -122.470729},
  {description: "Bench in the Presidio", lat: 37.795947, lng: -122.457345},
])
