import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/imluv4u@naver.com";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="contact" className="snap-section flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-16">
        Contact
      </p>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-5xl">
        {/* Newsletter */}
        <div>
          <h3 className="font-korean font-bold text-xl mb-3">뉴스레터</h3>
          <p className="text-sm text-muted-foreground mb-8">
            신작 소식과 작품 업데이트를 받아보세요.
          </p>
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 text-xs uppercase tracking-[0.15em] font-semibold shrink-0">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Collaboration form */}
        <div>
          <h3 className="font-korean font-bold text-xl mb-3">협업 문의</h3>
          <p className="text-sm text-muted-foreground mb-8">
            작품 관련 문의를 남겨주세요.
          </p>
          {submitted ? (
            <p className="text-sm text-primary font-korean">문의가 전송되었습니다. 감사합니다.</p>
          ) : (
            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                const formData = new FormData(e.currentTarget);
                await fetch(FORM_ENDPOINT, {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify(Object.fromEntries(formData)),
                });
                setSubmitting(false);
                setSubmitted(true);
              }}
            >
              <input type="hidden" name="_subject" value="[crimson-script] 새 협업 문의" />
              <input type="hidden" name="_captcha" value="false" />
              <Input
                name="name"
                placeholder="이름"
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
              <Input
                name="organization"
                placeholder="소속"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
              <Input
                name="email"
                type="email"
                placeholder="이메일"
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              />
              <Select name="type">
                <SelectTrigger className="bg-secondary border-border text-foreground focus:ring-primary">
                  <SelectValue placeholder="문의 유형" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="broadcast">방송사</SelectItem>
                  <SelectItem value="production">제작사</SelectItem>
                  <SelectItem value="other">기타</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                placeholder="메시지"
                rows={4}
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary resize-none"
              />
              <Button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-xs uppercase tracking-[0.15em] font-semibold"
              >
                {submitting ? "전송 중..." : "Submit"}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © 2025. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
