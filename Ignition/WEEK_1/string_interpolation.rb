#string interpolation practice

best_superpower = "hyperIntelligence"
space_invaders_defeated = 0
friends_name = "chris"
second_best_superpower = "flight"
friends_invaders_defeated = 999

puts ("type your name in.")
name = gets.chomp
puts ("Hi #{name}, it's nice to meet you.")
puts ("The coolest superpower is definitely #{best_superpower}.")
puts ("Even though #{friends_name} thinks #{second_best_superpower} is better.")
puts ("Either way, together we would probably defeat #{space_invaders_defeated + friends_invaders_defeated} space invaders.")
