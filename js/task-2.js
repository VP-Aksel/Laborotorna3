function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
      return message;
    } else {
      return message.slice(0, maxLength) + "...";
    }
  }
  
 
  console.log(formatMessage("Curabitur ligula sapien", 16));
  console.log(formatMessage("Curabitur ligula sapien", 23));
  console.log(formatMessage("Vestibulum facilisis purus\nnec", 20));
  console.log(formatMessage("Vestibulum facilisis purus\nnec", 30));
  console.log(formatMessage("Nunc sed turpis a felis in nunc\nfringilla", 15)); 
  console.log(formatMessage("Nunc sed turpis a felis in nunc\nfringilla", 41)); 