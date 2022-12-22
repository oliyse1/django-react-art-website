from django.db import models

# Create your models here.
class Artist(models.Model):
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.name