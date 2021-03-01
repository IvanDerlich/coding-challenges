# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/  

def max_profit(prices)
  results = []  
  for i in 0...prices.length-1
    # puts buy = {date: i, price: prices[i]}         
    # newPrices = prices.dup
    # newPrices.slice!(i)    
    for j in i..prices.length-1
      profit = prices[j] - prices[i]
      if  profit >0
        results.push(profit)
      end      
      
      # puts "Day of buying: " + i.to_s
      # puts "Price of buying: " + prices[i].to_s
      # puts "Day of selling: " + j.to_s
      # puts "Price of selling: " + prices[j].to_s
      # puts "Profit: " + (prices[j] - prices[i] ).to_s
    end
    # p newPrices

    # profit.push(prices[i+1]-prices[i])    
    # newprices    
    # profit.push(prices[i+1])
    
  end 
  # puts "Results: " + results.to_s
  # p "Results: " + results.to_s
  # p "Length: " + results.length.to_s
  return 0 if results.length == 0
  results.max
end


  
def test input, expected
  puts "Begin test"
  # puts "Begin test with imput: " + input
  result = max_profit(input)
  if(result === expected)
    puts "Test passed."
  else
    puts "Input: " + input.to_s
    puts "Expected: " + expected.to_s
    puts "Got: " + result.to_s
    puts "Test failed."      
  end    
  puts "------"
end

test [7,1,5,3,6,4], 5
test [7,6,4,3,1], 0
