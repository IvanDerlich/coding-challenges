def greatest_peaks(map)
  cols = rows = map.length
  groups = {}
  rows.times do |i|
    cols.times do |j| #explore all positions
      pos = i.to_s + j.to_s
      p pos
      next if groups.values.flatten.include? (pos) # skip pos if already in a group
      
      local_max = search_max(pos, map)
      temp = [pos]
      group_name = pos
      until pos == local_max # until it finds the peak
        p "#{pos} is not a peak"
        pos = local_max
        if groups.values.flatten.include? (pos)
          p "parent exists already"
          groups.each { |group, positions| group_name = group if positions.include?(pos) }
          p group_name
        else # pos not exists in groups
          p "parent doesn't exist"
          temp << pos
          local_max = search_max(pos, map)
          group_name = local_max
        end
      end
      puts "add #{temp} to #{group_name}"
      # add to temp to groups, create or add to group
      if groups[group_name]
        groups[group_name].concat(temp)
      else
        groups[group_name] = temp
      end
      p groups
    end
  end
  sizes = []
  groups.values.each do |group|
    sizes << group.size
  end
  result = [sizes.min, sizes.max]
end

def search_max(pos, map)
  pos.split("")
  i = pos.split("")[0].to_i
  j = pos.split("")[1].to_i
  current = map[i][j]
  j == 0 ? left = 0 : left = map[i][j-1]
  j == map.length-1 ? right = 0 : right = map[i][j+1]
  i == 0 ? up = 0 : up = map[i-1][j]
  i == map.length-1 ? down = 0 : down = map[i+1][j]
  comparison_arr = [current, left, right, up, down]
  
  case comparison_arr.max
    when current
      i.to_s + j.to_s
    when left
      i.to_s + (j-1).to_s
    when right
      i.to_s + (j+1).to_s
    when up
      (i-1).to_s + j.to_s
    when down
      (i+1).to_s + j.to_s
  end
  #value = map[i][j]
end

p greatest_peaks(
  [
    [2, 6, 9, 11], 
    [7, 8, 9, 8], 
    [6, 7, 12, 9],
    [10, 7, 6, 4]
  ]
)
# => [3, 6]

=begin
p greatest_peaks(
  [
    [8, 12], 
    [9, 3]
  ]
)
# => [1, 3]
=end