import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function About() {
  return (
    <>
      <Navbar />
      <div className="bg-background">
        <div className="container mx-auto p-6 min-h-screen bg-background">
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-center mb-4">
                About Us
              </CardTitle>
              <CardDescription className="text-xl text-center text-muted-foreground">
                Learn more about our mission and the team behind Bus Tracker.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Our mission is to revolutionize college transportation by
                  providing real-time bus tracking and updates. We aim to make
                  commuting easier, more efficient, and more enjoyable for
                  everyone.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">The Team</h2>
                <p className="text-lg text-muted-foreground">
                  We are a team of dedicated professionals passionate about
                  improving public transportation. Our diverse backgrounds and
                  expertise allow us to bring innovative solutions to the table.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  We envision a world where public transportation is the
                  preferred mode of travel. By providing accurate and timely
                  information, we hope to encourage more people to use public
                  transport and reduce traffic congestion and pollution.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
