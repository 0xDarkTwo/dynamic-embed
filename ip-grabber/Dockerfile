FROM public.ecr.aws/lambda/nodejs:18

RUN yum -y update \
&& yum -y groupinstall "Development Tools" \
&& yum install -y nodejs gcc-c++ cairo-devel \
	libjpeg-turbo-devel pango-devel giflib-devel \ 
	zlib-devel librsvg2-devel python3

COPY index.mjs draw.mjs package.json ./

RUN npm install

ENV LD_PRELOAD=/var/task/node_modules/canvas/build/Release/libz.so.1

RUN yum remove -y cairo-devel libjpeg-turbo-devel \
		pango-devel giflib-devel zlib-devel librsvg2-devel

# Set the CMD to your handler
CMD [ "index.handler" ]
