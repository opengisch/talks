# Speaker Notes

This notes should contain what you can - but not must - tell for each slide.

## QField - Because data is outside

Welcome everybody to my presentation about QField. 

### That's me

I'm ... I'm working for OPENGIS.ch as a ... *I'm doing ...*

### Open source geoninjas
At OPENGIS.ch we are **13 Geo-spatial Experts** located in **Switzerland**.

Everything we do - whenever possible -  we release with **open source** license.

*We do QGIS, QField, PostGIS, Android, Ili2DB, Webmapping ... Training, consultancy and maintenance.*

```
0.5 Min
```


## Why QField

Because data is outside.

Sometimes we have sensors, that deliver data (to QGIS). But mostly we have brave people that need to go outside and collect data in **bad weather conditions** *(knee-deep in the mud :-))* 

And **all they want to be is efficient**. They want to **go home soon, packed with the collected data**.

## What is QField

The **missing bit on QGIS** is, that it's not mobile. And thats why QField is the ideal side-kick. It's **QGIS made for tablets**: And this means, it's made for the **efficient mobile data collection**.

```
1.5 Min
```

### Minimalist UI

**QField is based on some principles**.

First thing, is that we want to keep the UI **intuitive and simple**.

Everytime when we want to introduce a new button, we have big discussions, if that button really needs to be there. Because **on the field you don't want fool around button** you don't need, just want to be efficient.

### Beautiful cartography

We want to allow people to use beautyful cartography.

We are using the **full QGIS rendering engine** - if your map looks good in QGIS, they it will look good in QField as well.

### Powerful tools

Just because we want to **keep the UI simple, this does not mean it's lacking of tools**.

We **just show the tools only, if they are really needed**. 

*What you see here in the background is the **editing mode**, where you have a button on top left for **topological editing, bottom right the controll buttons and the ones for enabling GPS**.*

### Efficient interaction

And like I said - if you are out in the freezing wheater, you **want to be efficient**.

So QField does provide the **functionalities for beeing so**. Like here in the background, you can **select mulitiple features**, and with the top right button you can **edit them all at the same time** - we will see a movie about it later on.
*Another example is the **remember value function**. Means when you create a feature and enter an attribute value you want to keep for the next features as well, it's a simple checkbox activation to achieve that.*


### Beneficial integration

Another cruxual point is having beneficial integrations like the camera or editing PDFs.
This makes your life much easier.
 
### Professional hardware

**Professional hardware makers are starting to deliver cool android devices**. On these devices you have a **better reception** and you can use an **external GNSS antenna**.
We are **working together with companies like Emlid or Trimble**.
For exampley you can connect to the Emlid Reach NMEA recevier directly without using any third party apps.

### Cloud

We have a cloud sollution. It's to **exchange your projects and data packages** between your mobile devices and your office. You can synchronize whenever you want from wherever you are and it takes care about all the data pushed from you and your colleages directly from the field.*

```
4.5 Min
```

## What can you do with QField

**Let's quickly through the workflow.**

It mainly **seperates the project configurator and the fieldworkers**. The "veggie team" reveives the preconfigured project and can go out into the field / storm.

### Comfortably prepare the work on your QGIS Desktop

The team leader **prepares it on QGIS and QFieldSync**. 

*The team leader decides what layer she wants to have handled offline or over the cloud, what layers needs to be ignored or which ones are connected directly to the database. Then there are additional settings like the path for the images etc.*

Then she uploads the project to the cloud or - **because of course it's not mandatory to use the cloud** - she copies it to the device just with an USB-cable.

### Efficiently work on your GIS data outdoor

The field workers **have nothing to do with all the configuration**. They just collect the data, digitize geometries, making photos and so on.

### Seamlessly syncronize on the device...

When they finished, they give back the data. Means, they **give the datapackage back to the teamleader**, who synchronizes the data easily with QFieldSync or - much cooler - do a simple click to **push to the Cloud**. 

```
5.5 Min
```

## What is in QField

### Powerfull forms

#### video form_widgets
- Widgets like Value Map, Range Slider like you know it in QGIS
- Constraints for a fist valdation of your data
- On numeric values you recveive the numeric keyboard
- *mention remember attributes function*

#### video conditional_visibility
- Coonditional visibility

#### video default update
- Default values are updated on the fly

### Camera, file and interactive widgets (qml, html)

#### video camera and pdf
- Camera functionality (*here the video recorder app acted weirdly - but QField stayed in landscape mode*)
- And we can open an attached PDF file

#### video qml and html
With the QML and HTML widget the user is very flexible to display information.
- Fancy Chart based on current values
- Interactive panel made by the user with HTML

### Multi Edit

#### video multi editing
Mentioned it before. 
- With the multi editing you can be very efficient.

### Relations

#### video relation widgets
Here the project context is, that we have the beehives and record how much percent from what field is consumed.

- we can add new references and new fields here and connect existing ones
- The relation widgets like you know them from QGIS just optimized for mobile use

#### video ordered relation widgets
And what the Ordered Relation Editor Plugin in QGIS does, is supported in QField as well.
You have roadsigns on a pole and when you change the order, you can use that for the arrangement of the symbols.

#### video auto complete
In case you have long lists in your drop down using Relation Reference or Value Relation Widgets an autocompletion is provided.

### Opening of individual datasets
#### video opening vector dataset
- It's possible to open datasources directly without having a QGIS project. 
- Datasource defined constraints are considered here. 
- Form widgets are recognized considering the datatype of the fields.
#### video opening raster dataset
- And raster data is possible to view as well considering it's georefernce
*you can set a QGIS project as basemap*
### Map Themes
#### video map themes
- Choose the layout defined by Map Themes
- What you expect from QGIS here as well

### Search
#### video search
- Search for features according an attribute
- Or search for coordinates

### Measure 
#### video measure
- Measuring tool for all the polygons.

### Edit geometry and use topological editing
#### video edit_geom
- Split geometry
- Merge them back again
- Change geometries by selecting the vertex and move it
- Cut out a part and fill it with a new feature or not

#### video edit_topo
- Snap to existing verteces and edges
- Move a vertex and the snapped vertex of another feature is moved as well

### GPS Tracking
### video tracking
- Track wherever you going
- Stuff like compass, Z vlaues and antenna height correction
- Seamless integration to external devices like e.g. Emlid Reach
### video NMEA receiver
You can connect external receivers like the Emlid Reach rs2 via bluetooth without the need of third party software.

### Print PDF
#### video print pdf
- Use the layer layouts configured in QGIS. *If you have some, the option is there - otherwise not.*
- Select the features to consider it in the Atlas print to PDF

### Freehand drawing
If your device works with a stylus pen, you can use it for the freehand digitizing.
```
18.5 Min
```

## Cloud
Cloud is in beta and coming very, very soon. There has been already a presentation earlier today about it, if missed it, check out the recordings.

## iOS and Windows Support
QField runs not only on Android. Versions for Windows and iOS are in beta as well. Check it out and have nice testing.

## Release info
This is the current release is 1.9.6.

QField is **widely used** - we have **400 Thousands of downloads**.

**To check up the latest stuff, become a Beta Tester**.

*If you have spare time, mention some stuff that could come one time, like: CAD computer-aided drafting implementation, Networkstate based, Humidity etc. sensors...)*

## Join the efford
**So dont hestitate. It's open source, it's a great tool and you will be in good company by a lot of other users.**

If you like it, then:
- Help us by telling us your story, show us how you use QField.
- Become a beta tester and report bugs - and have the nice features before everyone else
- Fix bugs and bring your inputs
- Finance bug fixing and awesome new ideas
We are happy about any kind of support.

## Custom app
And if you need something much more specific - invest in your custom app
We can obviously create a version especially for you.

```
20.5 Min
```