
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","assets/showdata.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

// So in doing research I encountered the notion that this is REALLY BAD FORM because document.write can
// easily cause other sections to stop working altogether as it can constantly overwrite the page.
// Right now this is just placeholder code to help me visualize how the xml works together with js and html.
// http://stackoverflow.com/questions/802854/why-is-document-write-considered-a-bad-practice

document.write("<ul>");
var x=xmlDoc.getElementsByTagName("show");
for (i=0;i<x.length;i++)
  { 
  document.write("<li><h1>");
  document.write(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
  document.write("</h1></li><li>");
   document.write(x[i].getElementsByTagName("poster")[0].childNodes[0].nodeValue);
  document.write("</li><li>");
  document.write(x[i].getElementsByTagName("firstAired")[0].childNodes[0].nodeValue);
  document.write("</li><li>");
  document.write(x[i].getElementsByTagName("airDate")[0].childNodes[0].nodeValue);
  document.write("</li><li>");
  document.write(x[i].getElementsByTagName("airTime")[0].childNodes[0].nodeValue);
  document.write("</li><li>");
  document.write(x[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue);
  document.write("</li><li>");
    document.write(x[i].getElementsByTagName("network")[0].childNodes[0].nodeValue);
  document.write("</li>");

  }
document.write("</ul>");
