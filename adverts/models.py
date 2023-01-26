from django.db import models
from django.utils.timezone import now
from dealers.models import Dealer
from artists.models import Artist

class Advert(models.Model):
    class Subject(models.TextChoices):
        ABSTRACT = 'Abstract'
        PEOPLE = 'People'
        LANDSCAPE = 'Landscape'
        ANIMAL = 'Animal'
        OTHER = "Other"
       
    class Medium(models.TextChoices):
        ACRYLIC = 'Acrylic'
        OIL = 'Oil'
        WATERCOLOR = 'Watercolor'
        OTHER = "Other"
    
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=150)
    artist = models.ForeignKey(Artist, on_delete=models.DO_NOTHING)
    dealer = models.ForeignKey(Dealer, on_delete=models.DO_NOTHING) #if dealer is deleted the advert will still exist, can be .CASCADE alternatively
    price = models.IntegerField()
    height = models.DecimalField(max_digits=6, decimal_places=1)
    width = models.DecimalField(max_digits=6, decimal_places=1)
    subject = models.CharField(max_length=50, choices=Subject.choices, default=Subject.ABSTRACT)
    medium = models.CharField(max_length=50, choices=Medium.choices, default=Medium.ACRYLIC)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)

    def __str__(self):
        return self.title