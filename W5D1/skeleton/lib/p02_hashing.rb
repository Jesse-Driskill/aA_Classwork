class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    ints = 0
    self.each_with_index do |ele, idx|
      if idx % 2 == 0
        ints += ele
      else
        ints *= ele
      end
    end
    ints += self.length
  end
end

class String
  def hash
    alphabet = ("a".."z").to_a
    ints = 0
    self.each_char.with_index do |char, idx|
      ints += idx
      # if alphabet.index(char) != nil
      ints += alphabet.index(char.downcase)
    end
    ints
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
