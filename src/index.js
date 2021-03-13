module.exports = function toReadable (number) {
  let str;
  if(number==0)
  {return "zero"}
  if(number/100>0)
  {
      switch(Math.floor(number/100)){
          case 1:
              str= "one hundred";
              break;
              case 2:
              str= "two hundred";
              break;
              case 3:
              str= "three hundred";
              break;
              case 4:
              str= "four hundred";
              break;
              case 5:
              str= "five hundred";
              break;
              case 6:
              str= "six hundred";
              break;
              case 7:
              str= "seven hundred";
              break;
              case 8:
              str= "eight hundred";
              break;
              case 9:
              str= "nine hundred";
              break;
              case 0:
                  str="";
              break;
      }
  }
  if((number/10-Math.floor(number/100)*10)>0)
  {
    if(!(Math.floor(number/100)==0))
    {
        str=str+" ";
    }
    switch(Math.floor(number/10-Math.floor(number/100)*10)){
    case 1: 
    switch(Math.floor(number-Math.floor(number/10)*10)){
        case 1:
            str=str + "eleven";
            return str;
                  case 2:
                  str=str + "twelve";
                  return str;
                  case 3:
                  str= str +"thirteen";
                  return str;
                  case 4:
                  str= str + "fourteen";
                  return str;
                  case 5:
                  str= str + "fifteen";
                  return str;
                  case 6:
                  str= str + "sixteen";
                  return str;
                  case 7:
                  str= str + "seventeen";
                  return str;
                  case 8:
                  str= str + "eighteen";
                  return str;
                  case 9:
                  str= str + "nineteen";
                  return str;
                  case 0:
                    str= str + "ten";
                    return str;
    }
        break;
              case 2:
              str=str + "twenty";
              break;
              case 3:
              str= str +"thirty";
              break;
              case 4:
              str= str + "forty";
              break;
              case 5:
              str= str + "fifty";
              break;
              case 6:
              str= str + "sixty";
              break;
              case 7:
              str= str + "seventy";
              break;
              case 8:
              str= str + "eighty";
              break;
              case 9:
              str= str + "ninety";
              break;
              case 0:
              break;
      }  
  }

  if(number-Math.floor(number/10)*10>0)
  {
    if(!(Math.floor(number/10-Math.floor(number/100)*10)==0))
    {
        str=str+" ";
    }
    switch(Math.floor(number-Math.floor(number/10)*10)){
    case 1:
        str=str + "one";
              break;
              case 2:
              str=str + "two";
              break;
              case 3:
              str= str +"three";
              break;
              case 4:
              str= str + "four";
              break;
              case 5:
              str= str + "five";
              break;
              case 6:
              str= str + "six";
              break;
              case 7:
              str= str + "seven";
              break;
              case 8:
              str= str + "eight";
              break;
              case 9:
              str= str + "nine";
              break;
              case 0:
              break;
      }  
  }
  
  return str;
}

