import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Calendar,
  MessageCircle,
  ArrowRight,
  Phone,
  Mail,
  X
} from 'lucide-react';

const FullScreenThankYou = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';

  const handleClose = () => {
    navigate('/'); 
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-500">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
              <img className='h-12' src="https://www.gatewayabroadeducations.com/images/logo.svg" alt="" />
          </div>
          <button
            onClick={handleClose}
            className="p-3 hover:bg-secondary rounded-xl transition-all duration-200 hover:scale-110 text-foreground"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Success Section */}
          <section className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="rounded-full bg-green-100 p-6">
                  <CheckCircle className="w-20 h-20 text-green-600" />
                </div>
                <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-20"></div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Thank You{name ? `, ${name}` : ''}!
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Your consultation request has been received successfully
            </p>
          </section>

          <section className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-primary/5 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Need Immediate Help?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call us at</p>
                      <a
                        href="tel:+919001571113"
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        +91 90015 71113
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us at</p>
                      <a
                        href={`mailto:jaipur@gatewayabroad.in`}
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        jaipur@gatewayabroad.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-secondary/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Next Actions
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={handleClose}
                    className="w-full border-2 border-primary text-primary py-4 px-6 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-200 hover:scale-105"
                  >
                    Return to Website
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <footer className="text-center mt-16">
            <p className="text-lg text-muted-foreground">
              We're excited to help you achieve your study abroad dreams! 🌟
            </p>
            {email && (
              <p className="text-sm text-muted-foreground mt-2">
                You'll receive a confirmation email shortly at{' '}
                <span className="font-medium text-foreground">{email}</span>
              </p>
            )}
          </footer>
        </div>
      </main>
    </div>
  );
};

export default FullScreenThankYou;