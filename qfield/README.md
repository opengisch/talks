# Speaker Notes

This notes should contain what you can - but not must - tell for each slide.

## QField - Because data is outside

Welcome everybody. Let's talk about QField

### That's me

I'm .... I'm working for OPENGIS.ch. I do ...

### Open source geoninjas
At OPENGIS.ch we are **nine Geo-spatial Experts** located in **Switzerland**.

Everything we do - whenever possible -  we release with **open source** license.

We do QGIS, QField, PostGIS, Android, Ili2DB, Webmapping ... Training, consultancy and maintenance.

## Why QField - Because data is outside

Sometimes we have sensors, that deliver data. But mostly we have people that need to go outside and collect data sometimes in bad weather conditions.

## What is QField

The **missing bit on QGIS** is, that it's not mobile. And thats why QField is the ideal side-kick. It's **QGIS made for tablets**: And this means, it's made for the **efficient mobile data collection**.

### Minimalist UI

**It's based on some principles**.

First thing, is that we want to keep the UI **intuitive and simple**.

Everytime when we want to introduce a new button, we have big discussions, if that button really needs to be there. Because on the field you don't want fool around buttons you don't need, just want to be efficient.

### Beautiful cartography

We want to allow people to use beautyful cartography.

We are using the **full QGIS rendering engine** - if it looks good in QGIS, they it will look good in QField as well.

### Powerful tools

Just because we want to **keep the UI simple, this does not mean it's lacking of tools**.

We just show the tools only, if they are really needed. 

What you see here in the background is the **editing mode**, where you have a button on top left for **topological editing, bottom right the controll buttons and the ones for enabling GPS**.

### Efficient interaction

When you are out in the freezing wheater, you **want to be efficient**.

So QField does provide the functionalities to be it. Like here in the background, you can **select mulitiple features**, and with the top right button you can **edit them all at the same time**. Or another example is the **remember value function**. Means when you create a feature and enter an attribute value you want to keep for the next features as well, it's a simple checkbox activation to achieve that.


### Beneficial integration

Another cruxual point is having beneficial integrations like the camera or editing PDFs.
This makes your life much easier.
 
### Professional hardware

**Professional hardware makers are starting to deliver cool android devices**. And this Trimple device is one we are currently testing. 

On these devices you have a **better reception** and you can use an **external GNSS antenna**. So this setup on the picture is working and we are **working together with companies like Emlid or Trimble** to get the best fit between their hardware and QField.  
 
### Cloud

QFieldCloud is ready and in internal testing phase. It will come into beta in this year so you can test it while your Christmas.
It's to exchange your projects and data packages between your mobile devices and your office.

## What can you do with QField

We go quickly through the workflow.

We seperate the project configurator and the endusers "the veggie team" that use the preconfigured project and go out into the storm.

### Comfortably prepare the work on your QGIS Desktop

**Prepare it on QGIS and QFieldSync**. Usually a team leader does that and the field workers have nothing to do with it.

The team leader decides what layer she wants to have handled offline or over the cloud, what layers needs to be ignored or which ones are connected directly to the database. Then there are additional settings like the path for the images etc.

Then she uploads the project to the cloud or - **because of course it's not mandatory to use the cloud** - she copies it to the device just with an USB-cable.

### Efficiently work on your GIS data outdoor

The field workers **have nothing to do with all the configuration**. They just collect the data, digitize geometries, making photos and so on.

### Seamlessly syncronize on the device...

When they finished, they give back the data. Means a simple click to **push to the Cloud** or they give the datapackage back to the teamleader, who synchronizes the data easily with QFieldSync.

## What is in QGIS

### Powerfull forms

#### video form_widgets
- Widgets like Value Map, Range Slider
- Soft and Hard constraints - evt. mention remember attributes function

#### video conditional_visibility
- Coonditional visibility

### Relations

#### video relation widgets
Here the project context is, that we have the beehives and record how much persent from what field is consumed...
- Relation Editor Widget
- Relation Reference Widget

### Camera, file and interactive widgets (qml, html)

#### video camera and pdf
- Foto with camera
- Open an attached pdf

#### video qml and html
- check out fancy qml charts
- check out interactive html widget

### Multi Edit
#### video multi editing
- multi editing

### Map Themes
#### video map themes
How to use **layer visibility** and **map themes**.
Like you see it's what you expect from QGIS here as well.

### Search
#### video search
- coordinate search
- search for feature according an attribute

### Measure 
#### video measure
- pleasure you can't measure

### Edit geometry and use topological editing
#### video edit_geom
-
-
#### video edit_topo
-

### GPS Tracking
### video tracking
- You can track wherever you going

mention compass, Z values, antenna height correction

### Freehand drawing
(not yet here)

### Print PDF
#### video print pdf
QField uses the layer layouts configured in QGIS. If you have some, the option is there.
Print to PDF and fine. **Print it with external app**

## Cloud
We are heaviling testing QField Cloud and you can join us soon as well as a beta tester.
It actually working similar to the well known offline editing, just that you can synchronize whenever you want, you don't have to bring the data back to the office.
QFieldCloud takes care about all the data pushed from different workers on the field.

## Release info
QField is widely used, 300 Thousands of downloads on android and Apple integration is in the pipeline.
This is the current release is 1.7.5
Become a beta tester to check out the latest stuff.

(If you have spare time, mention some stuff that could come one time, like: CAD computer-aided drafting implementation, Networkstate based, Humidity etc. sensors...)

## Join the efford
So dont hestitate. It's open source, it's a great tool and you will be in good company by a lot of other users.

If you like it, then:
- Help us by telling us your story, show us how you use QField.
- Become a beta tester and report bugs
- Fix bugs and bring your inputs
- Finance bug fixing and awesome new ideas
We are happy about any kind of support.

## Custom app
If you need something more specific - invest in your custom app
We can obviously customize QField and create a version especially for you