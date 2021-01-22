# updates data from bloomberg

import pandas as pd
import re
from bs4 import BeautifulSoup
import requests

def update():
    r = requests.get(
        'https://www.bloomberg.com/billionaires/',
        headers={
            'User-Agent': 
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Mobile Safari/537.36',
            'accept': 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'cookie': '_pxhd=0f753600648bce4e2b004860814b2d98af250ac9765b63cb910c02be1e4fbddb:522b9f41-2121-11eb-bef7-59853c51147a; _sp_krux=false; _sp_v1_uid=1:445:6ca4d5ec-2830-4ba7-8272-9fcdd371728b; _sp_v1_ss=1:H4sIAAAAAAAAAItWqo5RKimOUbLKK83J0YlRSkVil4AlqmtrlXQGQlksAJ3zQ2mdAAAA; _sp_v1_opt=1:; _sp_v1_csv=null; _sp_v1_lt=1:; _user-status=anonymous; _reg-csrf=s%3AjwTbeBfiHjHQsr6RFAvRkJRW.%2Bsw64C4uCzWZ71L3cd7PwcFcyJTwlDb6v5MMhw4kf%2FA; agent_id=440951d4-1f15-4e38-b0dc-6527ef23c137; session_id=7e394ac9-8aa5-4d38-9ce6-64fd4105a42b; session_key=87922da70a9a6574217fb26dd9e2fefc56b6aa7a; _sp_v1_data=2:232240:1604771257:0:9:0:9:0:0:_:-1; consentUUID=cce32c5e-1dcd-4580-befb-e6f4a6e27975; _reg-csrf-token=skfqfHhx-ghVdpHpKphYFm59TfpMwpYv-DkU',
        }
    )

    soup = BeautifulSoup(r.text, features='lxml')
    javascript = soup.find(
        lambda tag:
            tag.name == 'script' and 
            tag.string and 
            'window.top500' in tag.string
    ).string


    json_data = re.search(r'window.top500\s*=\s*(.*);\s*$', javascript).group(1)
    import json
    data = json.loads(json_data)
    df = pd.DataFrame.from_records(data)
    df = df.fillna('Unknown')
    df['worth-ytdChange'] = df.worth - df.ytdChange

    # if ytdchange is positive, plot worth-ytdChange, ytdChange
    # if ytdchange is negative, plot worth, abs(ytdchange)

    # arr example
    #     var data = google.visualization.arrayToDataTable([
    #         ['City', '2010 Population', '2000 Population'],
    #         ['New York City, NY', 8175000, 8008000],
    #         ['Los Angeles, CA', 3792000, 3694000],
    #         ['Chicago, IL', 2695000, 2896000],
    #         ['Houston, TX', 2099000, 1953000],
    #         ['Philadelphia, PA', 1526000, 1517000]
    #     ]);


    arr = [['Name', 'Net Worth 1/1/20', 'YTD Change']]

    person = df.iloc[497]
    row = []
    row.append(person.commonName)

    if person.ytdChange > 0:
        row.append(person['worth-ytdChange'])
        row.append(person.ytdChange)
    else:
        row.append(person.worth)
        row.append(abs(person.ytdChange))


    arr = [['Name', 'Net Worth 1/1/20', 'YTD Change', "{ role: 'style' }"]]

    for i in range(0, len(df)):
        person = df.iloc[i]
        row = []
        row.append(person.commonName)

        if person.ytdChange > 0:
            row.append(person['worth-ytdChange'])
            row.append(person.ytdChange)
            row.append('fill-color: #4fcc29')
        else:
            row.append(person.worth)
            row.append(abs(person.ytdChange))
            row.append('fill-color: #dd2323')

        arr.append(row)


    arr.append(['Top 20% of Americans', 630754, 0, 'fill-color: #000000'])
    arr.append(['Median American', 68828, 0, 'fill-color: #000000'])
    arr.append(['Median European', 24742, 0, 'fill-color: #000000'])
    arr.append(['Median Chinese', 20942, 0, 'fill-color: #000000'])
    arr.append(['Median World', 7087, 0, 'fill-color: #000000'])
    arr.append(['Median South America', 4929, 0, 'fill-color: #000000'])
    arr.append(['Median Asia-Pacific', 4188, 0, 'fill-color: #000000'])
    arr.append(['Median India', 4188, 0, 'fill-color: #000000'])
    arr.append(['Median Africa', 1219, 0, 'fill-color: #000000'])
    arr.append(['Bottom 20% of Americans', -6029, 0, 'fill-color: #000000'])
    arr.append(['US Treasury Cash Reserves', 35700000000, 0, 'fill-color: #000000'])


    with open('blog/static/js/dash.js', 'r') as f:
        dash_f = f.read()

    dash_f = dash_f.split('/* REPLACE */')

    dash_f[1] = str(arr).replace('"', '')

    dash_f = '/* REPLACE */'.join(dash_f)

    with open('blog/static/js/dash.js', 'w') as f:
        f.write(dash_f)


from time import sleep
update()
sleep(60*60*24)