iterations = 1

loop do
  puts "Number of iterations = #{iterations}"
  iterations += 1
  break if iterations > 5
end

# futher exploration
iterations = 1

loop do
  puts "Number of iterations = #{iterations}"
  break if iterations == 5
  iterations += 1
end