#######
# - INFO
#######
#Simple Script to:
# - load all plant images from a folder
# - Add white space so the image is a square (required for Acuityview)
# - Save new image
# - process new image using Acuityview
# - crop processed image back to original size
#
#Packages needed to be installed and loaded:
# - 'AcuityView'
# - 'magick'
# - 'imager'
#
#Requires:
# - A folder with all the images in it (as .jpg's)
# - A sub-folder called 'Output'


#######
# - User Defined Variables
#######
folderPath <- 'C:/Users/Alex/Desktop/Plants' #the folder where the images are loacted
leftRightBuffer = 6 #how much white space to add on the left and right
topBottomBuffer = 56 #how much white space to add on the top and bottom

acuityDist = 0.5 #the distance the image is being viewed from
acuityWidth = 0.1 #the width of the space in the image
acuityRes = 0.2 #the resolution of the animals eye



#######
# - Image processing
#######

#get a list of all images in folder
imageList <- list.files(folderPath, pattern = "\\.jpg$") 
picWidth <- 0
picHeight <- 0

#loop through all .jpgs
for(i in 1:length(imageList)) {
 
  #set the current image name
  curPicName <- imageList[i]
  
  #load in the current image
  curPic <- image_read(paste(folderPath,'/',curPicName, sep = ""))
  
  #add in a boarder
  curPic <- image_border(curPic, "white", paste(leftRightBuffer,"x",topBottomBuffer,sep = ""))
  
  #save the image in output
  image_write(curPic, path = paste(folderPath,"/Output/",curPicName, sep = ""), format = "jpg")
  
  #load the image again from out oput
  curPic <- load.image(paste(folderPath,"/Output/",curPicName, sep = ""))
  
  picWidth <- dim(curPic)[1] - leftRightBuffer*2
  picHeight <- dim(curPic)[2] - topBottomBuffer*2
  
  #Apply visual acuity blur
  AcuityView(photo = curPic, distance = acuityDist, realWidth = acuityWidth, eyeResolutionX = acuityRes, eyeResolutionY = NULL, plot = F, output=paste(folderPath,"/Output/",curPicName, sep = ""))
  
  #load in the acuity image
  curPic <- image_read(paste(folderPath,"/Output/",curPicName, sep = ""))
  
  curPic <- image_crop(curPic, paste(picWidth,'x',picHeight,'+',leftRightBuffer,'+',topBottomBuffer))
  
  #save the image in output
  image_write(curPic, path = paste(folderPath,"/Output/",curPicName, sep = ""), format = "jpg")
  
}


