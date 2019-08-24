from django import forms

class LoginForm(forms.Form):
    username=forms.CharField()
    password=forms.CharField(widget=forms.PasswordInput)
    widgets={
        'password' : {
            'date': forms.PasswordInput(attrs={  
                'class': 'form-control form-control-user',
                }),
        },
         'username' : {
            'date': forms.TextInput(attrs={  
                'class': 'form-control form-control-user',
                }),
        }
    }

        