#! /usr/bin/env python3
# ##################################################
# Script to generate big.js slides with title from a set of images
# an image called
# 0123-conditional_visibility.png
# will generate "conditional visibility" as title
# everything before a - and after a . is stripped.
# _ are replaced by whitespace
#
# following html is generated
# <div class="footer_title"><img src="./images/0123-conditional_visibility.png">conditional visibility</div>
#
# Usage:
# create all the needed images in a folder, run the script
# ./generate_big_presentation_from_images.py path/to/images/ ../optional/html/src/to/be/used
#
# Author marco@berna.io
# License GPLv3+

import os
import sys

ORDER_DESCENDING = False
ALLOWED_EXTENTIONS = ['png', 'jpg', 'gif', 'webp']

# use DIRECTORY from command line args
try:
    DIRECTORY = sys.argv[1]
except IndexError:
    DIRECTORY = os.path.dirname(os.path.realpath(__file__))
    print ('NOTICE: no argument found, using default DIRECTORY: %s' % DIRECTORY)

# use HTML_DIRECTORY from command line args
try:
    HTML_DIRECTORY = sys.argv[2]
except IndexError:
    HTML_DIRECTORY = './images/'
    print ('NOTICE: no argument found, using default HTML_DIRECTORY: %s' % HTML_DIRECTORY)

HTML_TEMPLATE = '<div><img src="%s"><p class="footer_title">%s</p></div>' % (
                HTML_DIRECTORY + '%s', '%s')


def is_allowed(filename):
    for extension in ALLOWED_EXTENTIONS:
        if filename.lower().endswith('.' + extension):
            return True
    return False


def generate_title(filename):
    title = filename.replace('_', ' ')
    title = title.split('.')[0]
    try:
        title = title.split('-')[1]
    except IndexError:
        pass
    return title.capitalize()


def main(reverse=True):
    dirs = sorted(os.listdir(DIRECTORY), reverse=reverse)
    for filename in dirs:
        if is_allowed(filename):
            title = generate_title(filename)
            html = HTML_TEMPLATE % (filename, title)
            print (html)

main(ORDER_DESCENDING)
