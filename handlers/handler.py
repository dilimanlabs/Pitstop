import os
import webapp2
import jinja2

template_dir = os.path.join(os.path.dirname(__file__), '../static/templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), extensions=['jinja2.ext.autoescape'], autoescape = True)
#jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), extensions=['jinja2.ext.autoescape'], variable_start_string='((', variable_end_string='))', autoescape=True)

class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.write(*a, **kw)
    
    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)
  
    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))