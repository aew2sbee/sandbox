FROM ubuntu:20.24
USER root

RUN apt update && apt install -y python3.10 python3-pip

COPY requirements.txt .
RUN python3.10 -m pip install -r requirements.txt

