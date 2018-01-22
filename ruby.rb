if cell has one neighbor
  then it dies
elsif it has 4-8 neighbors
  then it dies
elsif the cell has 2-3 neighbors
  then it survives
elsif an empty cell has 3 neighbors
  then it comes to life

  Make alive cell a + and the dead cell a -, Then use that to compare

  first initialz the board state with + and - and that = initiale state
  next step - read a cell and determine wheather it is alive or dead based on whats next to it
  setting up a hash
    indicate row1 (colomn 1 .. column 8)
    indicate row2 (colomn 1 .. column 8)...
    indicate row8 (colomn 1 .. column 8)
  compare the synbols and update the 'hash
'

silent coder challenge:

setting inital board state =
- have a unique value assigned to each cell based on the total number of cells in the grid
- have these values set up in a hash with rows and collumns so that you can get the address of each cell and then see which cells are next to the targeted cell.
  - for example: row1 (collum1, collum2.....highest collumn number)
                row2(collum 1.....etc.)
          - this is similar to assigning an x and y axis value to each cell.
  - the initial board state will consist of either a + or - in each cell depending on if the cell is dead or alive (+= alive, -=dead)

Now that we have set up the initial board conditions the next step is to target a ceritan cell (found within the hash) and see if the cells directly above, below, next to or diagonal to the target cell are dead or alive.
- from the hash, an array will be generated with the sequence of + or - that are correlated to the neighborring cells

create game board and assign numbers to columns and row
draw pattern
identify cells that are alive and check to see if they should survive or die
  check row above and below the cell to check
  if there are any cells alive in those rows, check to see if it the column it is in is +1 or -1 from the cell we are checking
    if yes, that active cell is a neighbor. Add 1 to a neighbor count
  if neighbor count is < 1 or greater than 4, cell dies, otherwise cell survives
check inactive cells (not alive/not dead) to see if it has neighbor using similar method as above, check rows -1 and +1 from cell to check and then column for any active found
  if neighbor count = 3 or more then cell comes alive

  board = {
    row one {
      column 1, state
      column 2, state
      column 3, state
      column 4, state
    }
    row 2 {
      column 1, state
      column 2, state
      column 3, state
      column 4, state
    }
    row 3 {
      column 1, state
      column 2, state
      column 3, state
      column 4, state
    }
    row 4 {
      column 1, state
      column 2, state
      column 3, state
      column 4, state
    }
    }
