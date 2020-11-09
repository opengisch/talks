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

Prepare it on QGIS and QFieldSync - usually a team leader does that and the field workers have nothing to do.

The team leader decides what layer she wants to have handled offline or over the cloud, what layers needs to be ignored or which ones are connected directly to the database. Then there are additional settings like the path for the images etc.

Then she uploads the project to the cloud or - because of course it's not mandatory to use the cloude - she copies it to the device just with an USB-cable.

### Efficiently work on your GIS data outdoor

The field workers have nothing to do with all the configuration. They just collect the data, digitize geometries, making photos and so on.

### Seamlessly syncronize on the device...

When they finished, the give the data back to the base. Means they push it to the QFieldCloud or they pass the datapackage back to the teamleader, who synchronizes the data with QFieldSync.

## What is in QGIS

### Powerfull forms
Widgets like Value Map, Range Slider (Costraints)
(Remember Attributes if it fits somewhere otherwise just mention)

### Relations
Relation Reference Widget
Value Relation Widget
Relation Editor Widget

### Conditional visibility

### Photo with Camera
and add file

### Multi Edit

### Map Themes
The video is quite fast but I will show it several times.
It shows us how to use **layer visibility** and **map themes**.
Like you see it's what you expect from QGIS here as well.

### Search

### Measure 

### Feature Editing
(topological, snapping, splitting, fill ring, ...)

### Topological Editing

### GPS Tracking
compass, Z values, antenna height correction, ...)

### Freehand drawing

### Print PDF
QField uses the layer layouts configured in QGIS. If you have some, the option is there.
Print to PDF and fine. **Print it with external app**

### Release info
QField is widely used.
This is the current release, and to check out the new feature become a beta tester

There is stuff on the roadmap 

CAD computer-aided drafting implementation
Networkstate based

Full internet connection / or have all the data offline.
Synchronize whenever you are online. And when you go offline, you keep on editing on offline data.

Humidity etc. sensors...

### Custom app
If you need more specific - invest in your custom app

### Cloud 

### Join the efford


