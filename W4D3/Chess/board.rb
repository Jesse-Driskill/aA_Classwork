#require "colorize"
require_relative "pieces.rb"

class Board

    attr_reader :grid

    def initialize
        @grid = Array.new(8) {Array.new(8, :X)}
    end

    def display_board
        i = 0
        puts "   0  1  2  3  4  5  6  7"
        @grid.each do |sub_arr|
            #i += 1
            # puts i.to_s + "  " + sub_arr.join("  ")
            symbols = []
            k = 0
            while k < sub_arr.length
                if sub_arr[k].is_a?(Piece)
                    symbols << sub_arr[k].symbol
                else
                    symbols << sub_arr[k]
                end
                k += 1
            end

            puts i.to_s + "  " + symbols.join("  ")
            i += 1
        end
    end

    def [](pos)
        return @grid[pos[0]][pos[1]]
    end

    def []=(pos, value)
        @grid[pos[0]][pos[1]] = value
    end

    def place_pieces
        #Black Pieces
        @grid[1].each_with_index do |ele, idx| #pawns
            @grid[1][idx] = Pawn.new([1, idx], "b") 
        end

        @grid[0][0] = Rook.new([0, 0], "b")
        @grid[0][7] = Rook.new([0, 7], "b") #rooks

        @grid[0][1] = Knight.new([0, 1], "b") #knights
        @grid[0][6] = Knight.new([0, 6], "b")

        @grid[0][2] = Bishop.new([0, 2], "b") #bishops
        @grid[0][5] = Bishop.new([0, 5], "b")

        @grid[0][3] = Queen.new([0, 3], "b") #Queen and King
        @grid[0][4] = King.new([0, 4], "b")


        #White Pieces
        @grid[6].each_with_index do |ele, idx| #pawns
            @grid[6][idx] = Pawn.new([6, idx], "w")
        end

        @grid[7][0] = Rook.new([0, 0], "w")
        @grid[7][7] = Rook.new([0, 7], "w") #rooks

        @grid[7][1] = Knight.new([0, 1], "w") #knights
        @grid[7][6] = Knight.new([0, 6], "w")

        @grid[7][2] = Bishop.new([0, 2], "w") #bishops
        @grid[7][5] = Bishop.new([0, 5], "w")

        @grid[7][3] = Queen.new([0, 3], "w") #Queen and King
        @grid[7][4] = King.new([0, 4], "w")
    end
end

j = Board.new()
j.place_pieces


j.display_board