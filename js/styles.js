import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;

const primaryColor = "#42a";
const dullColor = "#aaa";
const backgroundColor = '#eee';
const backgroundDullColor = '#ddd';

export const styles = StyleSheet.create({
    h1: {
        fontSize: 18,
        color: primaryColor,
        width: width
    },

    h2: {
        paddingLeft: 30,
        width: width,
    },

    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },

    webview: {
        width: width
    },

    listitem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: dullColor,
        width: width
    },

    photo: {
        width: width,
        height: width
    }

});

styles.tabIcon_Selected = primaryColor;
styles.tabIcon = dullColor;
styles.tabBackgroundColor = backgroundDullColor;

styles.viewerHTML = `
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="mobile-web-app-capable" content="yes" />
  <title>Very Basic 3D Viewer</title>
  <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
  <!-- The Viewer JS & CSS-->
  <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/style.min.css?v=v7.*"
    type="text/css">

    
  <script language="JavaScript"
    src="https://developer.api.autodesk.com/modelderivative/v2/viewers/viewer3D.min.js?v=v7.*"></script>
</head>

<body style="margin:0" >
  <img src='/images/forge-logo.png' style="height:auto;width:20%;position:absolute;left:10px;top:10px;z-index:233">
  <div id="MyViewerDiv"></div>



  <!-- Developer JS -->
  <script>
    var myViewerDiv = document.getElementById('MyViewerDiv');
    var viewer = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv);
    var options = {
      'env': 'Local',
      'document': 'http://developer-autodesk.github.io/translated-models/shaver/0.svf'
    };
    Autodesk.Viewing.Initializer(options, function () {
      viewer.start(options.document, options);
    });
  </script>
</body>

</html>
    `;