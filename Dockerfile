FROM ubuntu:14.04
MAINTAINER linzhixiong <linzhixk@gmail.com>
RUN apt-get update && apt-get install -y ruby ruby-dev
CMD echo 'hello world' 
