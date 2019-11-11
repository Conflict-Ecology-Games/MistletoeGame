#######
# - INFO
#######
#Simple Script to:
# - Write some java script into a text file that will load all images into the game that are save in a certain folder
#
#Requires:
# - A folder with all the images in it (as .jpg's)
# - An empty text file named ImageListCode.txt


#######
# - User Defined Variables
#######
# Where the images are stores
folderPath <- 'C:/Users/Alex/Dropbox/Research/Games/Game Files/MistletoeGame/images'
# Where the text file is located
textFilePath <- "C:/Users/Alex/Dropbox/Research/Games/Game Files/MistletoeGame/ImageListCode.txt"

#######
# - Processing
#######

imageList <- list.files(folderPath, pattern = "\\.jpg$") #list all the .jpgs

#loop through all the .jpgs
for (i in 1:length(imageList)) {
  
  #Set the image to work on
  CurFile <- imageList[i] 
  CurType <- 1
  
  #Find out if it is HH, MM, HM or MH and set the weighting value as appropriate
  if (substr(CurFile,nchar(CurFile)-4,nchar(CurFile)-4) == substr(CurFile,nchar(CurFile)-5,nchar(CurFile)-5)) {
   
    CurType = 0.5
     
  }
  
  #write text to the text file, which can be copy and pasted into the photo-list text doc
  write(paste('\t{ url: "images/',CurFile,'",\n\t  weight: ',CurType,',\n\t  known: null\n\t},',sep = ""),
        textFilePath, append = TRUE)

}