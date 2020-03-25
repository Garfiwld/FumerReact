# FumerReact

## Docker

#### !!! System Requirements !!!

#### Docker Ram > 3Gb.

![Screenshot](./image/docker_ram_seting.PNG)

```
docker build -t fumer-react .
```  
```
docker run -itd -v ${pwd}:/app -v /app/node_modules -p 3000:3000 fumer-react
```
