import httpx
from config import *
# Tests des différentes ressources


# API KEY

headers = {'X-API-Key': list(API_KEYS.keys())[0]}


def test_app_main() :
    response = httpx.get(f"https://traefik/", headers = headers, verify=False)
    assert response.status_code == 200

def test_app_contact() :
    response = httpx.get(f"https://traefik/contact/", headers = headers, verify=False)
    assert response.status_code == 200

