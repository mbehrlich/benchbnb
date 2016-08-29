@benches.each do |bench|
  json.set! bench.id, bench, :id, :description, :lat, :lng
end
