# Dynamic Image Embeds

A collection of simple AWS Lambda functions for generating images dynamically, useful for websites that embed image links.

# Functions

## IP Grabber

> Grabs the IP of the entity requesting the image and displays it along with their IP range's tagged location.

> Will not work on websites that proxy image embeds to the user (Discord, Instagram etc.)

## Counter

> Displays an image of Joeyy along with a counter representing the number of times the resource has been accessed/shared. May not always update once the image is cached such as the case with Discord, however the counter will continue to increment if a new client accesses it

> Must edit environment variables in Lambda to match your namespace and API key for [CountAPI](https://countapi.xyz)

# Getting Started

Install and configure the `AWS CLI` and `Docker Desktop`

CD into the directory of the function you wish to build and run `docker build -t [function-name] .`

[Follow the steps to push this docker image to AWS ECR and run it as a Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-upload)