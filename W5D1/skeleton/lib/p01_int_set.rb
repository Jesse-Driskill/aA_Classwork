class MaxIntSet

  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    if is_valid?(num) && !include?(num)
      @store[num] = true
    end
  end

  def remove(num)
    if is_valid?(num) && include?(num)
      @store[num] = false
    end
  end

  def include?(num)
    return @store[num]
  end

  private

  def is_valid?(num)
    if num > @store.length
      raise "Out of bounds"
    elsif num < 0
      raise "Out of bounds"
    end
    return true
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[num % num_buckets] << num
  end

  def remove(num)
    # @store[num % num_buckets].delete(num) if include?(num)
    if include?(num)
      i = 0
      while i < @store[num % num_buckets].length
        if num == @store[num % num_buckets][i]
          @store[num % num_buckets].delete_at(i)
        end
        i += 1
      end
    end
  end

  def include?(num)
    if @store[num % num_buckets].include?(num)
      return true
    else
      return false
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count == num_buckets
    if !@store[num % num_buckets].include?(num)
      @store[num % num_buckets] << num
      @count += 1
    elsif @store[num % num_buckets].include?(num)
      return
    end
  end

  def remove(num)
    if self.include?(num)
      @store[num % num_buckets].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!(*args)
    if @count == num_buckets
      old = @store.dup 
      @store = Array.new(2 * num_buckets) {Array.new}
      @count = 0
      old.each do |bucket|
        bucket.each do |num|
          self.insert(num)
        end
      end
    end
  end

  def resize!(*args)
    if @count == num_buckets
      # old = @store.dup 
      @store = @store.concat(Array.new(num_buckets) {[]})
      @count = 0
      @store.each do |bucket|
        bucket.each do |num|
          self.insert(num)
        end
      end
    end
  end

  def resize!(*args)
    # if @count == num_buckets
      old_elements = []
      @store.each do |bucket|
        bucket.each do |num|
          old_elements << num
          self.remove(num)
        end
      end

      @store = @store.concat(Array.new(num_buckets) {[]})
      old_elements.each { |num| self.insert(num) }
    # end
  end


end
