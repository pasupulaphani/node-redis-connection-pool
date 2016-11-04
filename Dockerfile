FROM redis:3.0-alpine
MAINTAINER 	Phani Pasupula <pasupulaphani@gmail.com>

RUN adduser -h /home/tester -s /bin/sh -u 40561 -D tester tester
USER tester
