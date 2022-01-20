require_relative "board.rb"
require "colorize"

class Piece
    def initialize(pos, color)
        @pos = pos
        @color = color
    end
end


class Queen < Piece
    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @pos = pos
        @color = color
        @possible_moves = []

        if @color == "w"
            @symbol = "♕".cyan
        else
            @symbol = "♛".red
        end
    end

end

class Pawn < Piece
    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @pos = pos
        @color = color
        @possible_moves = []

        if @color == "w"
            @symbol = "♙".cyan
        else
            @symbol = "♟".red
        end
    end
end

class Rook < Piece
    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @pos = pos
        @color = color
        @possible_moves = []

        if @color == "w"
            @symbol = "♖".cyan
        else
            @symbol = "♜".red
        end
    end
end

class Knight < Piece
    attr_reader :symbol
    
    def initialize(pos, color)
        super(pos, color)
        @pos = pos
        @color = color
        @possible_moves = []

        if @color == "w"
            @symbol = "♘".cyan
        else
            @symbol = "♞".red
        end
    end
end

class Bishop < Piece
    attr_reader :symbol
    
    def initialize(pos, color)
        super(pos, color)
        @pos = pos
        @color = color
        @possible_moves = []

        if @color == "w"
            @symbol = "♗".cyan
        else
            @symbol = "♝".red
        end
    end
end

class King < Piece
    attr_reader :symbol

    def initialize(pos, color)
        super(pos, color)
        @pos = pos
        @color = color
        @possible_moves = []

        if @color == "w"
            @symbol = "♔".cyan
        else
            @symbol = "♚".red
        end
    end
end

class NullPiece < Piece
    attr_reader :symbol
    super(pos, color)
end

# q = Queen.new([3, 6], "black")
# p q

# pete = Pawn.new([3, 6], "b")
# puts pete.symbol