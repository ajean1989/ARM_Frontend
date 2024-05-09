"use server"

export async function getEnvironment(){
  
    let dns : string = "init"
    let dns_localhost : string = "init"

    console.log("ENV : ", process.env.ENV)
    switch (process.env.ENV) {
    case "production" :
              dns = "jacquenet.com";
              break;
          case "development" :
              dns = "jacquenet.traefik.me";
              break;
          case "test" :
              dns = "traefik";
              break;
          default : dns = "error on ENV";
            break;
      }

      console.log("NODE_LOCAL : ", process.env.NODE_LOCAL)
      if (process.env.NODE_LOCAL === "localhost"){
        dns_localhost = "localhost"
      }
      else {
        dns_localhost = dns
      }

    console.log("dns : ", dns)
    console.log("dns_localhost : ", dns_localhost)
    return [dns, dns_localhost]
  }