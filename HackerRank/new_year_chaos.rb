def test input, expected
    puts "Begin test"
    # puts "Begin test with imput: " + input    
    if(palindromeIndex(input) === expected)
      puts "Test passed."
    else
      puts "Expected: " + expected.to_s
      puts "Got: " + palindromeIndexNew(input).to_s
      puts "Test failed."      
    end    
    puts "------"
end

test "aaab", 3
test "baa", 0
test "aaa", -1