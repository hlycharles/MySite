from django import template
from django.conf import settings

register = template.Library()

@register.filter
def at_index(list, index):
    return list[index]

@register.filter
def get_attr(obj, key):
    if hasattr(obj, key):
        return getattr(obj, key)
    return settings.TEMPLATE_STRING_IF_INVALID
