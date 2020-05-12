class Robot
  attr_reader :name

  @@names_used = []

  def initialize
    reset
  end

  def reset
    name = generate_name()
    until !@@names_used.include?(name)
      name = generate_name()
    end
    @@names_used << name
    @name = name
  end

  def generate_name
    ('AA'..'ZZ').to_a.sample + (Random.new.rand(899) + 100).to_s
  end
end
