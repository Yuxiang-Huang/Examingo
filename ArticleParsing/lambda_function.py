from newspaper import Article
from bs4 import BeautifulSoup
url = 'https://www.nytimes.com/2023/12/26/world/middleeast/israel-netanyahu-politics-mood.html'
# url = 'https://www.sciencedirect.com/science/article/pii/S2352154620300097'
article = Article(url)
article.download()
article.parse()
print(article.text)