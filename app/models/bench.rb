class Bench < ActiveRecord::Base

  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Bench.where("lat < ? AND lat > ? AND lng < ? AND lng > ?",
    bounds["northEast"]["lat"],
    bounds["southWest"]["lat"],
    bounds["northEast"]["lng"],
    bounds["southWest"]["lng"])
  end

end
