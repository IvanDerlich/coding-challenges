  #https://www.hackerrank.com/contests/microverse-coding-challenges/challenges/palindrome-index
  load "palindrome_variables.rb"
             

  def palindromeIndex(s)    
    return -1 if s == s. reverse
    s.each_char.with_index do |char, index|          
      newString = s.dup               
      newString.slice!(index) #creates new string and removes the char in that the index
      return index if newString == newString.reverse      
    end
    return -1
  end 

  def palindromeIndexNew(s)    
    return -1 if s == s. reverse
    for index in 0... s.length
      char = s[index]
      s.slice!(index)
      return index if check(s) == true
      s.insert(index,char)
    end
    return -1
  end   

  def check(s)
    length = s.length
    for i in 0..length/2
      return false if s[i] != s[length-i]
    end
    true
  end
  
  
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

  
  
  test string1, 28939
  test string2, 85370
  test string3, 4274
  test string4, 4284  
  test string5, 21772
  # palindromeIndexNew("aaab")
  # palindromeIndexNew("baa")
  # palindromeIndexNew("aaa")