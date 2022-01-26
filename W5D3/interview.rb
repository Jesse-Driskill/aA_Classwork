



#bfs
#start at the root
#look through each of the children
#if we don't find our target, we'll continue the process in the root's first child,
#if nil return, we'll continue with the rest of the children

class PolyTree

    def bfs(target_value)
        if self.value == target_value
            return true
        end

        arr = []
        arr << self

        while arr.length != 0
            n = arr.shift()

            if n.value == target_value
                return target_value
            end

            n.children.each do |child|
                arr << child
            end
        end

        return nil
    end


end

